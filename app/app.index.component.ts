/// <reference path="../typings/jquery/jquery.d.ts" />
import {Component} from 'angular2/core';
import { RouterLink } from 'angular2/router';
import {ProductService} from './service/product-service'

@Component({
    selector: 'index',
    templateUrl:  "app/partial/app.index.html",
    directives: [RouterLink]
})
export class Index {
    constructor(private _productService: ProductService) {
        _productService.getAll();
    }

    ngAfterViewInit() {
        $('.toggle-nav').click(function (e) {
            $(this).toggleClass('active');
            $('.menu ul').toggleClass('active');
            e.preventDefault();
        });
        $('.bxslider').bxSlider({
            auto: true
        });

            //// Set the correct [touchscreen] body class
            //$('body').removeClass('no-touch').addClass('touch');

            // Add the touch toggle to show text when tapped
            $('div.boxInner').click(function(){
                $(this).closest('.boxInner').toggleClass('touchFocus');
            });
    }

    imageClicked(elem) {
        console.log(elem);
    }

}
