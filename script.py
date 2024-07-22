import sqlite3
 
def create_database():
    conn = sqlite3.connect("auth.db")
    c = conn.cursor 


# create user table
    c.execute('''CREATE TABLE [IF NOT EXISTS] users(
      email_address text PRIMARY KEY, 
      password text UNIQUE) ''')
    

    conn.commit()
    conn.close 


#create db and users table 
create_database()
