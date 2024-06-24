/*
gender === "male" => "he is male"
gender === "female" => "she is female"
gender other than male, female => "they are other"
*/

/*
SYNTAX : if-elseif-else
if( )
{
}
else if( )
{
}
else
{
}
*/
let gender="a"
if(gender=="male")
    {
        console.log("He is Male")
    }
    else if(gender=="female" )
    {
        console.log("She is Female")
    }
    else
    {
        console.log("They are other")
    }

/*
age 0 to 18 =>Underage
age 19 to 60 =>Adult
age 61 to 150 =>Old
else none
*/
let age=22
if(age>=0 && age<=18)
{
    console.log("Underage")
}
else if(age>=19 && age<= 60)
{
    console.log("Adult")
}
else if(age>=61 && age<=150)
{
    console.log("Old")
}
else
{
    console.log("None")
}