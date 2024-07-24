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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatoonController = void 0;
const common_1 = require("@nestjs/common");
const platoon_service_1 = require("./platoon.service");
const create_platoon_dto_1 = require("./create-platoon.dto");
const update_platoon_dto_1 = require("./update-platoon.dto");
const swagger_1 = require("@nestjs/swagger");
let PlatoonController = class PlatoonController {
    constructor(platoonService) {
        this.platoonService = platoonService;
    }
    create(createPlatoonDto) {
        return this.platoonService.create(createPlatoonDto);
    }
    findAll() {
        return this.platoonService.findAll();
    }
    findOne(id) {
        return this.platoonService.findOne(+id);
    }
    update(id, updatePlatoonDto) {
        return this.platoonService.update(+id, updatePlatoonDto);
    }
    remove(id) {
        return this.platoonService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_platoon_dto_1.CreatePlatoonDto]),
    __metadata("design:returntype", void 0)
], PlatoonController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlatoonController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlatoonController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_platoon_dto_1.UpdatePlatoonDto]),
    __metadata("design:returntype", void 0)
], PlatoonController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlatoonController.prototype, "remove", null);
PlatoonController = __decorate([
    (0, common_1.Controller)('platoons'),
    (0, swagger_1.ApiTags)('platoon'),
    __metadata("design:paramtypes", [platoon_service_1.PlatoonService])
], PlatoonController);
exports.PlatoonController = PlatoonController;
//# sourceMappingURL=platoon.controller.js.map