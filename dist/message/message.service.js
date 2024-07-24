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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const db_service_service_1 = require("../db-service.service");
let MessageService = class MessageService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createMessageDto) {
        return this.prisma.message.create({ data: createMessageDto });
    }
    findAll() {
        return this.prisma.message.findMany();
    }
    findOne(id) {
        return this.prisma.message.findUnique({ where: { id } });
    }
    update(id, updateMessageDto) {
        return this.prisma.message.update({ where: { id }, data: updateMessageDto });
    }
    remove(id) {
        return this.prisma.message.delete({ where: { id } });
    }
};
MessageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_service_1.PrismaService])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map