var detailedUsers = [
    {
        firstName: 'Ahmed',
        lastName: 'Ali',
        dateOfBirth: '1995-10-10',
        address: 'Alexadria, Egypt'
    },
    {
        firstName: 'Hossam',
        lastName: 'Mohamed',
        dateOfBirth: '1980-05-10',
        address: 'Nasr City, Cairo, Egypt'
    },
    {
        firstName: 'John',
        lastName: 'James',
        dateOfBirth: '1975-03-05',
        address: 'Nasr street, Nasr City, Cairo, Egypt'
    },
    {
        firstName: 'Tarek',
        lastName: 'Hassan',
        dateOfBirth: '1999-12-03',
        address: '15, street name, district, city, country'
    },
    {
        firstName: 'Hussein',
        lastName: 'Youssuf',
        dateOfBirth: '2005-12-03',
        address: 'abc, street name, district, city, country'
        }
    ]
    
    function formattedUsers(array) {
        var obj = [];
        for (let i = 0; i < array.length; i++)
        {
            fullname = array[i].firstName + " " + array[i].lastName;
            // console.log(fullname);
            todaysdate = new Date("2022-01-10");
            dob = new Date(array[i].dateOfBirth);
            age = todaysdate.getFullYear() - dob.getFullYear();
            // console.log(age);
            var location = (array[i].address).split(',');
            // console.log(location);
            key = location.length;
            switch (key) {
                case 2:
                    obj[i] = {
                        fullname : fullname,
                        age: age,
                        city: location[0],
                        country: location[1]
                    };
                    // console.log(obj[i].fullname, obj[i].age, obj[i].city, obj[i].country);
                    break;
                
                case 3:
                    obj[i] = {
                        fullname : fullname,
                        age: age,
                        district: location[0],
                        city: location[1],
                        country: location[2]
                    };
                    // console.log(obj[i].fullname, obj[i].age, obj[i].district, obj[i].city, obj[i].country);
                    break;
    
                case 4:
                    obj[i] = {
                        fullname : fullname,
                        age: age,
                        street: location[0],
                        district: location[1],
                        city: location[2],
                        country: location[3]
                    };
                    // console.log(obj[i].fullname, obj[i].age, obj[i].street, obj[i].district, obj[i].city, obj[i].country);
                    break;
    
                case 5:
                    buildingNum = location[0];
                    if (isNaN(buildingNum)) {
                        obj[i] = {
                            fullname : fullname,
                            age: age,
                            street: location[1],
                            district: location[2],
                            city: location[3],
                            country: location[4]
                        };
                    } else {
                        obj[i] = {
                            fullname : fullname,
                            age: age,
                            buildingNum: location[0],
                            street: location[1],
                            district: location[2],
                            city: location[3],
                            country: location[4]
                        };
                        // console.log(obj[i].fullname, obj[i].age, obj[i].buildingNum, obj[i].street, obj[i].district, obj[i].city, obj[i].country);   
                    }
                    break;
                default:
                    break;
            }
        }
        return obj;
    }
    var users = formattedUsers(detailedUsers);
    
    var usersAge = [];
    var i=0;
    for (var index = 0; index < users.length; index++) {
        if(users[index].age < 40)
        {
            usersAge[i] = users[index].age;
            i++;
        }
    }
    // console.log(usersAge);

    
    function reducerFunc(sum,current) {
        sum = sum + current
        return sum;
    }
    
    var average = usersAge.reduce(reducerFunc,0)/usersAge.length;
    console.log(average)