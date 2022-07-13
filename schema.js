create table student (
	id serial primary key ,
	firstname varchar ,
	lastname varchar
)

create table book (
	id serial primary key ,
	name varchar ,
	author varchar
)

create table borrow_info (
	id serial primary key ,
	stu_id serial REFERENCES student (id),
	bk_id serial REFERENCES book (id),
	borrowed_by varchar,
	borrowed_on timestamp,
	expected_date timestamp
)

