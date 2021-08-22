const fetch = require('node-fetch');
var FormData = require('form-data');
let formData = new FormData();
formData.append('url', 'https://yalchin.info/media/images/supervisor_status.jpg');

fetch("https://images-df-services.deliveroff.com/api/v1/back/bot/upload/image/with_url",
    {
        body: formData,
        method: "post"
    })
	.then(res => res.json())
    .then(json => console.log(json.image.id));
