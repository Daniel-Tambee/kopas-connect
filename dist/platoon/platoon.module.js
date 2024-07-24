"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatoonModule = void 0;
const common_1 = require("@nestjs/common");
const platoon_service_1 = require("./platoon.service");
const db_service_service_1 = require("../db-service.service");
const platoon_controller_1 = require("./platoon.controller");
let PlatoonModule = class PlatoonModule {
};
PlatoonModule = __decorate([
    (0, common_1.Module)({
        providers: [platoon_service_1.PlatoonService, db_service_service_1.PrismaService],
        imports: [],
        controllers: [platoon_controller_1.PlatoonController]
    })
], PlatoonModule);
exports.PlatoonModule = PlatoonModule;
//# sourceMappingURL=platoon.module.js.map