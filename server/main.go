package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"

	"github.com/gofiber/fiber/v2"
)

var Db *sql.DB

func main() {
	app := fiber.New()
	connectToDB()

	app.Use(func(c *fiber.Ctx) error {
		accessToken := string(c.Request().Header.Peek("ACCESS_TOKEN"))

		if accessToken == "" {
			c.Locals("noUser", "true")
		} else {
			fmt.Println(accessToken)
		}
		return c.Next()
	})

	app.Get("/api/feed", func(c *fiber.Ctx) error {
		if c.Locals("noUser") == "true" {
			return c.Status(fiber.StatusOK).JSON(fiber.Map{
				"tweets": getFeed(),
			})
		}
		return c.SendString("Hello, World!")
	})

	app.Listen(":5000")
}

func connectToDB() {
	var err error
	Db, err = sql.Open("postgres", "postgresql://postgres@localhost:5432/mydb?sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}
}

func getAllUser() {
	var res string
	var todos []string
	rows, err := Db.Query("SELECT username FROM account")
	defer rows.Close()
	if err != nil {
		log.Fatalln(err)
	}
	for rows.Next() {
		rows.Scan(&res)
		todos = append(todos, res)
	}
}

func getFeed() []Feed {
	var res Feed
	var todos []Feed
	rows, err := Db.Query(
		`select body , username , tweet.id , author_id from tweet
		 inner join account on account.id = tweet.author_id 
		 where tweet.reply_tweet_id is null`,
	)
	defer rows.Close()
	if err != nil {
		log.Fatalln(err)
	}
	for rows.Next() {
		rows.Scan(&res.Body, &res.Username, &res.Id, &res.AuthorID)
		todos = append(todos, res)
	}
	return todos
}
