"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("../../products/product.entity");
const client_entity_1 = require("../../clients/entities/client.entity");
let Purchase = class Purchase {
};
exports.Purchase = Purchase;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Purchase.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], Purchase.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array'),
    __metadata("design:type", Array)
], Purchase.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => client_entity_1.Client),
    (0, typeorm_1.JoinColumn)({ name: 'client_id' }),
    __metadata("design:type", client_entity_1.Client)
], Purchase.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", product_entity_1.Product)
], Purchase.prototype, "product", void 0);
exports.Purchase = Purchase = __decorate([
    (0, typeorm_1.Entity)()
], Purchase);
//# sourceMappingURL=purchase.entity.js.map