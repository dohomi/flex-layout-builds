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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, ElementRef, Input, Renderer, Self, Optional, } from '@angular/core';
import { BaseFxDirective } from './base';
import { LayoutDirective } from './layout';
import { MediaMonitor } from '../../media-query/media-monitor';
import { LAYOUT_VALUES } from '../../utils/layout-validator';
/**
 * 'layout-padding' styling directive
 *  Defines padding of child elements in a layout container
 */
var LayoutGapDirective = (function (_super) {
    __extends(LayoutGapDirective, _super);
    /* tslint:enable */
    function LayoutGapDirective(monitor, elRef, renderer, container) {
        var _this = _super.call(this, monitor, elRef, renderer) || this;
        _this._layout = 'row'; // default flex-direction
        if (container) {
            _this._layoutWatcher = container.layout$.subscribe(_this._onLayoutChange.bind(_this));
        }
        return _this;
    }
    Object.defineProperty(LayoutGapDirective.prototype, "gap", {
        /* tslint:disable */
        set: function (val) { this._cacheInput('gap', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapXs", {
        set: function (val) { this._cacheInput('gapXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapSm", {
        set: function (val) { this._cacheInput('gapSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapMd", {
        set: function (val) { this._cacheInput('gapMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapLg", {
        set: function (val) { this._cacheInput('gapLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapXl", {
        set: function (val) { this._cacheInput('gapXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtXs", {
        set: function (val) { this._cacheInput('gapGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtSm", {
        set: function (val) { this._cacheInput('gapGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtMd", {
        set: function (val) { this._cacheInput('gapGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtLg", {
        set: function (val) { this._cacheInput('gapGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtSm", {
        set: function (val) { this._cacheInput('gapLtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtMd", {
        set: function (val) { this._cacheInput('gapLtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtLg", {
        set: function (val) { this._cacheInput('gapLtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtXl", {
        set: function (val) { this._cacheInput('gapLtXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    LayoutGapDirective.prototype.ngOnChanges = function (changes) {
        if (changes['gap'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    LayoutGapDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._watchContentChanges();
        this._listenForMediaQueryChanges('gap', '0', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    LayoutGapDirective.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
        if (this._observer) {
            this._observer.disconnect();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     */
    LayoutGapDirective.prototype._watchContentChanges = function () {
        var _this = this;
        var onMutationCallback = function (mutations) {
            var validatedChanges = function (it) {
                return (it.addedNodes && it.addedNodes.length) ||
                    (it.removedNodes && it.removedNodes.length);
            };
            // update gap styles only for child 'added' or 'removed' events
            if (mutations.filter(validatedChanges).length) {
                _this._updateWithValue();
            }
        };
        this._observer = new MutationObserver(onMutationCallback);
        this._observer.observe(this._elementRef.nativeElement, { childList: true });
    };
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     */
    LayoutGapDirective.prototype._onLayoutChange = function (direction) {
        var _this = this;
        this._layout = (direction || '').toLowerCase();
        if (!LAYOUT_VALUES.find(function (x) { return x === _this._layout; })) {
            this._layout = 'row';
        }
        this._updateWithValue();
    };
    /**
     *
     */
    LayoutGapDirective.prototype._updateWithValue = function (value) {
        var _this = this;
        value = value || this._queryInput("gap") || '0';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        // Gather all non-hidden Element nodes
        var items = this.childrenNodes
            .filter(function (el) { return (el.nodeType === 1); }) // only Element types
            .filter(function (el) { return _this._getDisplayStyle(el) != "none"; });
        var numItems = items.length;
        if (numItems > 1) {
            var lastItem = items[numItems - 1];
            // For each `element` children EXCEPT the last,
            // set the margin right/bottom styles...
            items = items.filter(function (el, j) { return j < numItems - 1; });
            this._applyStyleToElements(this._buildCSS(value), items);
            // Clear all gaps for all visible elements
            this._applyStyleToElements(this._buildCSS(), [lastItem]);
        }
    };
    /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     */
    LayoutGapDirective.prototype._buildCSS = function (value) {
        if (value === void 0) { value = null; }
        var key, margins = {
            'margin-left': null,
            'margin-right': null,
            'margin-top': null,
            'margin-bottom': null
        };
        switch (this._layout) {
            case 'column':
            case 'column-reverse':
                key = 'margin-bottom';
                break;
            case "row":
            case 'row-reverse':
            default:
                key = 'margin-right';
                break;
        }
        margins[key] = value;
        return margins;
    };
    return LayoutGapDirective;
}(BaseFxDirective));
__decorate([
    Input('fxLayoutGap'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LayoutGapDirective.prototype, "gap", null);
__decorate([
    Input('fxLayoutGap.xs'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LayoutGapDirective.prototype, "gapXs", null);
__decorate([
    Input('fxLayoutGap.sm'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LayoutGapDirective.prototype, "gapSm", null);
__decorate([
    Input('fxLayoutGap.md'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LayoutGapDirective.prototype, "gapMd", null);
__decorate([
    Input('fxLayoutGap.lg'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LayoutGapDirective.prototype, "gapLg", null);
__decorate([
    Input('fxLayoutGap.xl'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LayoutGapDirective.prototype, "gapXl", null);
__decorate([
    Input('fxLayoutGap.gt-xs'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LayoutGapDirective.prototype, "gapGtXs", null);
__decorate([
    Input('fxLayoutGap.gt-sm'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LayoutGapDirective.prototype, "gapGtSm", null);
__decorate([
    Input('fxLayoutGap.gt-md'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LayoutGapDirective.prototype, "gapGtMd", null);
__decorate([
    Input('fxLayoutGap.gt-lg'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LayoutGapDirective.prototype, "gapGtLg", null);
__decorate([
    Input('fxLayoutGap.lt-sm'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LayoutGapDirective.prototype, "gapLtSm", null);
__decorate([
    Input('fxLayoutGap.lt-md'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LayoutGapDirective.prototype, "gapLtMd", null);
__decorate([
    Input('fxLayoutGap.lt-lg'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LayoutGapDirective.prototype, "gapLtLg", null);
__decorate([
    Input('fxLayoutGap.lt-xl'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LayoutGapDirective.prototype, "gapLtXl", null);
LayoutGapDirective = __decorate([
    Directive({ selector: "\n  [fxLayoutGap], \n  [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md], [fxLayoutGap.lg], [fxLayoutGap.xl],\n  [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md], [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl],\n  [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm], [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]\n"
    }),
    __param(3, Optional()), __param(3, Self()),
    __metadata("design:paramtypes", [MediaMonitor,
        ElementRef,
        Renderer,
        LayoutDirective])
], LayoutGapDirective);
export { LayoutGapDirective };
//# sourceMappingURL=/home/travis/build/angular/flex-layout/src/lib/flexbox/api/layout-gap.js.map