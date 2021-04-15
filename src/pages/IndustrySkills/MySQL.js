import { Avatar, Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import 'src/css/Cards.css';
import 'src/css/Components.css';
import 'src/css/Images.css';
import { v4 as uuid } from 'uuid';
import PageFooter from '../../components/PageFooter';

const MySQL = () => {
  const pageTitle = 'MySQL';
  const sqlRules = [
    'Keywords should be written in capital letters (e.g. SELECT, FROM and ORDER BY) although SQL is not case-sensitive so the code will still run in lowercase',
    'If you have two or more statements, use a semicolon ; to separate them so that MySQL will execute each statement individually'
  ];
  const filterKeywords = [
    'SELECT DISTINCT - Used instead of SELECT to remove duplicate rows from the final result set',
    'LIMIT - Used in the SELECT clause to define the number of rows to return. It accepts one or two arguments that must be zero or positive integers. "LIMIT [offset] row_count;" where offset specifies the offset of the first row to return and row_count specifies the maximum number of rows to return.',
    'WHERE - Used after the FROM statement to apply a search condition for the rows returned by a query. The search condition is a combination of one or more predicates using the logical operator AND, OR and NOT. If the condition evaluates to TRUE, it will be included in the final result set',
    'IN - An operator that can be used in a search condition to determine if a specified value matches any value in a set of values or returned by a subquery',
    'BETWEEN - An operator used to specify whether a value is in a range or not. The BETWEEN operator is often used in the WHERE clause of the SELECT, UPDATE, and DELETE statements. Follows the "expr [NOT] BETWEEN begin_expr AND end_expr;" syntax. The BETWEEN operator returns true if the value of the expr is greater than or equal to (>=) the value of begin_expr and less than or equal to (<=) the value of the end_expr, otherwise, it returns zero. The NOT BETWEEN returns true if the value of expr is less than (<) the value of the begin_expr or greater than (>)the value of the value of end_expr, otherwise, it returns 0. If any expression is NULL, the BETWEEN operator returns NULL',
    'NULL - IS NULL operator tests whether a value is NULL. MySQL uses the TINYINT(1) to represent BOOLEAN values i.e., true means 1 and false means 0.'
  ];
  const joins = [
    'INNER JOIN - Only includes rows whose values match',
    'LEFT JOIN - Selects all data from the left table whether there are matching rows exist in the right table or not. In case there is no matching rows from the right table found, NULLs are used for columns of the row from the right table in the final result set',
    'RIGHT JOIN - Selects all rows from the right table and matches rows in the left table. If a row from the right table does not have matching rows from the left table, the column of the left table will have NULL in the final result set.',
    'CROSS JOIN - Combines each row from the first table with every row from the right table to make the result set'
  ];
  const modifyKeywords = [
    'INSERT - Insert one or more rows into a table following the syntax "INSERT INTO table(c1,c2,...) VALUES (v1,v2,...);"',
    'INSERT IGNORE - Rows with invalid data that cause the error are ignored and the rows with valid data are inserted into the table',
    'UPDATE - Change the values in one or more columns of a single row or multiple rows',
    'DELETE - Deletes data from a table by specifying the table and rows from which data should be deleted. Uses a WHERE condition to determine the rows',
    'ON DELETE CASCADE - Delete data from child tables automatically when data is deleted from the parent table',
    'REPLACE - Deletes the conflicting row and inserts a new row into the table when a duplicate-key error occurs'
  ];

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box className="embedded-video"><ReactPlayer url="https://youtu.be/2bW3HuaAUcY" /></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Getting Started</Typography> <br />
            <Typography>MySQL is regularly used in industry to manage relational databases. A relational database
              organises data into one or more tables in which data types may be related to each other, which helps
              structure the data. MySQL uses Structured Query Language (SQL), like many other relational database
              management systems, which makes it easy to transfer between using different systems. SQL statements direct
              a server to perform certain operations on a database such as requesting information, modifying the data or
              defining data types. Some standard rules for writing SQL statements are:
            </Typography>
            <ul className="bullet-points">{sqlRules.map((rule) => (
              <li key={uuid()}><Typography>{rule}</Typography></li>))}
            </ul>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Grid container className="center-grid-container" spacing={6} wrap="wrap">
          <Grid item className="grid-item" md={6} sm={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" variant="h3">Querying Data</Typography> <br />
                <Typography>The SELECT statement allows you to read data from one or more tables. SELECT queries are
                  follow the format of &quot;SELECT &lt;list of columns or expression you want to show in the
                  result&gt; FROM &lt;name of table(s)&gt;;&ldquo;. Using an &quot;*&ldquo; will select everything from
                  a table but it is best practice to avoid using this for simplicity, security and disk usage
                  reasons.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item className="grid-item" md={6} sm={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" variant="h3">Sorting Data</Typography> <br />
                <Typography>A SELECT statement can be followed by ORDER BY to sort the result. Columns that should be
                  sorted are specified after the ORDER BY clause where ASC sorts the result set in ascending order and
                  DESC sorts in descending order. By default, the ORDER BY clause uses ASC if you don’t explicitly
                  specify any option. If you want to sort the result set by multiple columns, you specify a
                  comma-separated list of columns in the ORDER BY clause. When columns are being sorted in different
                  ways, the result in sorted in order of the columns specified.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Filtering Data</Typography> <br />
            <Typography>There are many different keywords for filtering data within a MySQL database:</Typography>
            <ul className="bullet-points">
              {filterKeywords.map((keyword) => (<li key={uuid()}><Typography>{keyword}</Typography></li>))}
            </ul>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Grid container className="center-grid-container" spacing={6} wrap="wrap">
          <Grid item className="grid-item" md={6} sm={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" variant="h3">Joining Tables</Typography> <br />
                <Typography>A relational database consists of multiple related tables linking together using common
                  columns which are known as foreign key columns. A join is a method of linking data between one
                  (self-join) or more tables based on values of the common column between the tables. The join clause is
                  used in the SELECT statement after the FROM clause. MySQL supports the following types of join:
                </Typography>
                <ul className="bullet-points">{joins.map((join) => (
                  <li key={uuid()}><Typography>{join}</Typography></li>))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item className="grid-item" md={6} sm={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" variant="h3">Modifying Data</Typography> <br />
                <Typography>There are several methods of modifying the data within a table:</Typography>
                <ul className="bullet-points">
                  {modifyKeywords.map((keyword) => (<li key={uuid()}><Typography>{keyword}</Typography></li>))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ m: 5 }}>
        <div className="img-centre">
          <a target="_blank" rel="noreferrer" href="https://www.mysql.com/">
            <Avatar
              alt="MySQL Logo"
              style={{ width: 130, height: 130 }}
              src="/static/images/resources/mysql.jpg"
              variant="square"
            />
          </a>
        </div>
        <Typography className="img-caption">Download MySQL to get started</Typography>
      </Box>
      <Box sx={{ m: 5 }}>
        <PageFooter pageComplete="mysql" />
      </Box>
    </>
  );
};

export default MySQL;
