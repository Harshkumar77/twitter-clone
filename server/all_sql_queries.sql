-- This file has all the neccessary sql queries required for this project
-- Migration would be an overkill thatswhy I am using a file to keep track of all the
-- views
create table account(
	id serial primary key,
	username varchar(10) unique not null,
	password varchar(100) not null
);


create table tweet (
	id serial primary key,
	body varchar(5000) not null,
	reply_tweet_id int default null,
	author_id int not null,
	constraint fk_author
		foreign key(author_id)
		references account(id)
		on delete cascade,
	constraint fk_reply_of
		foreign key(reply_tweet_id) 
		references tweet(id)
		on delete set null
)

select 
	body , username 
from 
	tweet
inner join account on account.id = tweet.author_id 
where tweet.reply_tweet_id is null
