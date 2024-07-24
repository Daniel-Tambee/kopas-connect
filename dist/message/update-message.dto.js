"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMessageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_message_dto_1 = require("./create-message.dto");
class UpdateMessageDto extends (0, swagger_1.PartialType)(create_message_dto_1.CreateMessageDto) {
}
exports.UpdateMessageDto = UpdateMessageDto;
//# sourceMappingURL=update-message.dto.js.map