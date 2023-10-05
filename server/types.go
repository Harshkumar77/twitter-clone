package main

type Feed struct {
	Username string `json:"username"`
	Body     string `json:"body"`
	Id       int    `json:"tweetId"`
	AuthorID int    `json:"authorId"`
}
