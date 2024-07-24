"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlatoonDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_platoon_dto_1 = require("./create-platoon.dto");
class UpdatePlatoonDto extends (0, swagger_1.PartialType)(create_platoon_dto_1.CreatePlatoonDto) {
}
exports.UpdatePlatoonDto = UpdatePlatoonDto;
//# sourceMappingURL=update-platoon.dto.js.map