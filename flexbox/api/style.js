var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, ElementRef, Input, Renderer, KeyValueDiffers, SecurityContext } from '@angular/core';
import { NgStyle } from '@angular/common';
import { BaseFxDirectiveAdapter } from './base-adapter';
import { BreakPointRegistry } from './../../media-query/breakpoints/break-point-registry';
import { MediaMonitor } from '../../media-query/media-monitor';
import { extendObject } from '../../utils/object-extend';
import { DomSanitizer } from '@angular/platform-browser';
import { ngStyleUtils as _ } from '../../utils/style-transforms';
/**
 * Directive to add responsive support for ngStyle.
 *
 */
var StyleDirective = (function (_super) {
    __extends(StyleDirective, _super);
    /* tslint:enable */
    /**
     *  Constructor for the ngStyle subclass; which adds selectors and
     *  a MediaQuery Activation Adapter
     */
    function StyleDirective(monitor, _bpRegistry, _sanitizer, _differs, _ngEl, _renderer) {
        var _this = _super.call(this, _differs, _ngEl, _renderer) || this;
        _this.monitor = monitor;
        _this._bpRegistry = _bpRegistry;
        _this._sanitizer = _sanitizer;
        // Build adapter, `cacheInput()` interceptor, and get current inline style if any
        _this._buildAdapter(monitor, _ngEl, _renderer);
        _this._base.cacheInput('style', _ngEl.nativeElement.getAttribute("style"), true);
        return _this;
    }
    Object.defineProperty(StyleDirective.prototype, "styleBase", {
        /**
         * Intercept ngStyle assignments so we cache the default styles
         * which are merged with activated styles or used as fallbacks.
         */
        set: function (val) {
            this._base.cacheInput('style', val, true);
            this.ngStyle = this._base.inputMap['style'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleXs", {
        /* tslint:disable */
        set: function (val) { this._base.cacheInput('styleXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleSm", {
        set: function (val) { this._base.cacheInput('styleSm', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleMd", {
        set: function (val) { this._base.cacheInput('styleMd', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleLg", {
        set: function (val) { this._base.cacheInput('styleLg', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleXl", {
        set: function (val) { this._base.cacheInput('styleXl', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtSm", {
        set: function (val) { this._base.cacheInput('styleLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtMd", {
        set: function (val) { this._base.cacheInput('styleLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtLg", {
        set: function (val) { this._base.cacheInput('styleLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtXl", {
        set: function (val) { this._base.cacheInput('styleLtXl', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtXs", {
        set: function (val) { this._base.cacheInput('styleGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtSm", {
        set: function (val) { this._base.cacheInput('styleGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtMd", {
        set: function (val) { this._base.cacheInput('styleGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtLg", {
        set: function (val) { this._base.cacheInput('styleGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleXs", {
        /** Deprecated selectors */
        set: function (val) { this._base.cacheInput('styleXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "styleSm", {
        set: function (val) { this._base.cacheInput('styleSm', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleMd", {
        set: function (val) { this._base.cacheInput('styleMd', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleLg", {
        set: function (val) { this._base.cacheInput('styleLg', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleXl", {
        set: function (val) { this._base.cacheInput('styleXl', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleLtXs", {
        set: function (val) { this._base.cacheInput('styleLtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleLtSm", {
        set: function (val) { this._base.cacheInput('styleLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleLtMd", {
        set: function (val) { this._base.cacheInput('styleLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleLtLg", {
        set: function (val) { this._base.cacheInput('styleLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleGtXs", {
        set: function (val) { this._base.cacheInput('styleGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleGtSm", {
        set: function (val) { this._base.cacheInput('styleGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleGtMd", {
        set: function (val) { this._base.cacheInput('styleGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleGtLg", {
        set: function (val) { this._base.cacheInput('styleGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    StyleDirective.prototype.ngOnChanges = function (changes) {
        var changed = this._bpRegistry.items.some(function (it) {
            return ("ngStyle" + it.suffix in changes) || ("style" + it.suffix in changes);
        });
        if (changed || this._base.mqActivation) {
            this._updateStyle();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    StyleDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._base.listenForMediaQueryChanges('style', '', function (changes) {
            _this._updateStyle(changes.value);
        });
    };
    StyleDirective.prototype.ngOnDestroy = function () {
        this._base.ngOnDestroy();
    };
    // ************************************************************************
    // Private Internal Methods
    // ************************************************************************
    /**
     * Use the currently activated input property and assign to
     * `ngStyle` which does the style injections...
     */
    StyleDirective.prototype._updateStyle = function (value) {
        var style = value || this._base.queryInput("style") || '';
        if (this._base.mqActivation) {
            style = this._base.mqActivation.activatedInput;
        }
        // Delegate subsequent activity to the NgStyle logic
        this.ngStyle = style;
    };
    /**
     * Build MediaQuery Activation Adapter
     * This adapter manages listening to mediaQuery change events and identifying
     * which property value should be used for the style update
     */
    StyleDirective.prototype._buildAdapter = function (monitor, _ngEl, _renderer) {
        var _this = this;
        this._base = new BaseFxDirectiveAdapter(monitor, _ngEl, _renderer);
        // Build intercept to convert raw strings to ngStyleMap
        var cacheInput = this._base.cacheInput.bind(this._base);
        this._base.cacheInput = function (key, source, cacheRaw, merge) {
            if (cacheRaw === void 0) { cacheRaw = false; }
            if (merge === void 0) { merge = true; }
            var styles = _this._buildStyleMap(source);
            if (merge) {
                styles = extendObject({}, _this._base.inputMap['style'], styles);
            }
            cacheInput(key, styles, cacheRaw);
        };
    };
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     */
    StyleDirective.prototype._buildStyleMap = function (styles) {
        var _this = this;
        var sanitizer = function (val) {
            // Always safe-guard (aka sanitize) style property values
            return _this._sanitizer.sanitize(SecurityContext.STYLE, val);
        };
        if (styles) {
            switch (_.getType(styles)) {
                case 'string': return _.buildMapFromList(_.buildRawList(styles), sanitizer);
                case 'array': return _.buildMapFromList(styles, sanitizer);
                case 'set': return _.buildMapFromSet(styles, sanitizer);
                default: return _.buildMapFromSet(styles, sanitizer);
            }
        }
        return styles;
    };
    return StyleDirective;
}(NgStyle));
__decorate([
    Input('ngStyle'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "styleBase", null);
__decorate([
    Input('ngStyle.xs'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "ngStyleXs", null);
__decorate([
    Input('ngStyle.sm'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "ngStyleSm", null);
__decorate([
    Input('ngStyle.md'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "ngStyleMd", null);
__decorate([
    Input('ngStyle.lg'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "ngStyleLg", null);
__decorate([
    Input('ngStyle.xl'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "ngStyleXl", null);
__decorate([
    Input('ngStyle.lt-sm'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "ngStyleLtSm", null);
__decorate([
    Input('ngStyle.lt-md'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "ngStyleLtMd", null);
__decorate([
    Input('ngStyle.lt-lg'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "ngStyleLtLg", null);
__decorate([
    Input('ngStyle.lt-xl'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "ngStyleLtXl", null);
__decorate([
    Input('ngStyle.gt-xs'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "ngStyleGtXs", null);
__decorate([
    Input('ngStyle.gt-sm'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "ngStyleGtSm", null);
__decorate([
    Input('ngStyle.gt-md'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "ngStyleGtMd", null);
__decorate([
    Input('ngStyle.gt-lg'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "ngStyleGtLg", null);
__decorate([
    Input('style.xs'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "styleXs", null);
__decorate([
    Input('style.sm'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "styleSm", null);
__decorate([
    Input('style.md'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "styleMd", null);
__decorate([
    Input('style.lg'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "styleLg", null);
__decorate([
    Input('style.xl'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "styleXl", null);
__decorate([
    Input('style.lt-xs'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "styleLtXs", null);
__decorate([
    Input('style.lt-sm'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "styleLtSm", null);
__decorate([
    Input('style.lt-md'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "styleLtMd", null);
__decorate([
    Input('style.lt-lg'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "styleLtLg", null);
__decorate([
    Input('style.gt-xs'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "styleGtXs", null);
__decorate([
    Input('style.gt-sm'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "styleGtSm", null);
__decorate([
    Input('style.gt-md'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "styleGtMd", null);
__decorate([
    Input('style.gt-lg'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StyleDirective.prototype, "styleGtLg", null);
StyleDirective = __decorate([
    Directive({
        selector: "\n    [style.xs], [style.sm], [style.md], [style.lg], [style.xl],      \n    [style.lt-sm], [style.lt-md], [style.lt-lg], [style.lt-xl], \n    [style.gt-xs], [style.gt-sm], [style.gt-md], [style.gt-lg], \n    [ngStyle], \n    [ngStyle.xs], [ngStyle.sm], [ngStyle.lg], [ngStyle.xl],   \n    [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl], \n    [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg] \n  "
    }),
    __metadata("design:paramtypes", [MediaMonitor,
        BreakPointRegistry,
        DomSanitizer,
        KeyValueDiffers,
        ElementRef, Renderer])
], StyleDirective);
export { StyleDirective };
//# sourceMappingURL=/home/travis/build/angular/flex-layout/src/lib/flexbox/api/style.js.map