drop table if exists users;
create table users (
  name text primary key not null,
  password text not null,
  phonenumber text not null,
  type text not null,
  language text not null
);

drop table if exists conversation;
create table conversation (
  conversation_id integer primary key autoincrement,
  user1 text not null,
  user2 text not null
);

drop table if exists message;
create table message (
  message_id integer primary key autoincrement,
  text text not null,
  conversation_id integer not null,
  FOREIGN KEY (conversation_id) REFERENCES conversation(conversation_id)
);