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
exports.PlatoonService = void 0;
const common_1 = require("@nestjs/common");
const db_service_service_1 = require("../db-service.service");
let PlatoonService = class PlatoonService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createPlatoonDto) {
        return this.prisma.platoon.create({ data: createPlatoonDto });
    }
    findAll() {
        return this.prisma.platoon.findMany();
    }
    findOne(id) {
        return this.prisma.platoon.findUnique({ where: { id } });
    }
    update(id, updatePlatoonDto) {
        return this.prisma.platoon.update({ where: { id }, data: updatePlatoonDto });
    }
    remove(id) {
        return this.prisma.platoon.delete({ where: { id } });
    }
};
PlatoonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_service_1.PrismaService])
], PlatoonService);
exports.PlatoonService = PlatoonService;
//# sourceMappingURL=platoon.service.js.map