import { Component, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
    selector: 'fb-like',
    template: `<a href="https://facebook.com/share" [attr.data-text]="text" [attr.data-url]="url" class="fb-like" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></a>`
})

export class FacebookComponent implements AfterViewInit {
    @Input() url = location.href;

    constructor() {
        // initialise facebook sdk after it loads if required
        if (!window['fbAsyncInit']) {
            window['fbAsyncInit'] = function () {
                window['FB'].init({
                    appId: 'your-app-id',
                    autoLogAppEvents: true,
                    xfbml: true,
                    version: 'v3.0'
                });
            };
        }

        // load facebook sdk if required
        const url = 'https://connect.facebook.net/en_US/sdk.js';
        if (!document.querySelector(`script[src='${url}']`)) {
            let script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        }
    }

    ngAfterViewInit(): void {
      (<HTMLDivElement>document.getElementById("navg")).hidden = false;
      (<HTMLDivElement>document.getElementById("adminNav")).hidden = true;
        // render facebook button
        window['FB'] && window['FB'].XFBML.parse();
    }
}