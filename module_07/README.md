starting a data base using username

```properties
psql -U `username` -d `database`
```

connect information

```properties
PS D:\2025\next\module_07> psql -U postgres
Password for user postgres:

psql (17.4)
WARNING: Console code page (437) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.
Type "help" for help.

postgres=#

```

database list

```properties
postgres=# \l
                                                                    List of databases
   Name    |  Owner   | Encoding | Locale Provider |          Collate           |           Ctype            | Locale | ICU Rules |   Access privileges
-----------+----------+----------+-----------------+----------------------------+----------------------------+--------+-----------+-----------------------
 postgres  | postgres | UTF8     | libc            | English_United States.1252 | English_United States.1252 |        |           |
 student   | postgres | UTF8     | libc            | English_United States.1252 | English_United States.1252 |        |           |
 template0 | postgres | UTF8     | libc            | English_United States.1252 | English_United States.1252 |        |           | =c/postgres          +
           |          |          |                 |                            |                            |        |           | postgres=CTc/postgres
 template1 | postgres | UTF8     | libc            | English_United States.1252 | English_United States.1252 |        |           | =c/postgres          +
           |          |          |                 |                            |                            |        |           | postgres=CTc/postgres
 test_db   | postgres | UTF8     | libc            | English_United States.1252 | English_United States.1252 |        |           |
(5 rows)


postgres=#
```

Create database using template

```postgres
CREATE DATABASE "test_with_template"
    WITH TEMPLATE = "template1";
```

create a user with password

```postgres
 CREATE USER juliette WITH LOGIN ENCRYPTED PASSWORD 'password';
```

grant view only permission to user

```postgres
GRANT SELECT ON TABLE tablename TO username;
```

revoke permission

```
REVOKE SELECT ON TABLE tablename TO username;
```

grant access to a new user similar to another user

```postgres
GRANT existinguser TO anotheruser
```
