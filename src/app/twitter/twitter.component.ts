import { Component, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
    selector: 'tweet',
    template: `<a href="https://twitter.com/share" [attr.data-text]="text" [attr.data-url]="url" class="twitter-share-button"></a>`
})

export class TwitterComponent implements AfterViewInit {
    @Input() url = location.href;
    @Input() text = '';

    constructor() {
        const url = 'https://platform.twitter.com/widgets.js';
        if (!document.querySelector(`script[src='${url}']`)) {
            let script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        }
    }

    ngAfterViewInit(): void {
        window['twttr'] && window['twttr'].widgets.load();
    }
}