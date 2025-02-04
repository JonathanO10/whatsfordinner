module.exports.viewAll = function (req, res, next) {
    const restaurants =[{
        id:1,
        name: 'Pizza Hut',
        image: 'https://dynl.mktgcdn.com/p/d9AXTJEWMZ156q11dLLVRHsmufNu0k-ng4JYb_4WwRI/1900x1427/jpg',
        rating: 2,
        category: 'Italian',
        description: 'asdasdsadsadsad asds dasdasdsadas dsadsdsd gdfgddfasdas dsadasdsadsdsa gafasfasfasdas dsadas'
    },
    {       id: 2,
            name: 'Not Pizza Hut',
            image: 'https://dynl.mktgcdn.com/p/d9AXTJEWMZ156q11dLLVRHsmufNu0k-ng4JYb_4WwRI/1900x1427/jpg',
            rating: 4,
            category: 'Italian',
            description: 'dsadsadsad sadsadsdsa dsdsadasf dsfsdbgfdfsdfsd fsd sdfdsdsd fsdfsdfsdfsdfsfs'
    }];
    res.render('index', {restaurants});
}