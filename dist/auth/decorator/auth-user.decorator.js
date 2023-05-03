"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserParam = void 0;
const common_1 = require("@nestjs/common");
exports.AuthUserParam = (0, common_1.createParamDecorator)((_data, req) => { var _a; return (_a = req.args[0]) === null || _a === void 0 ? void 0 : _a.user; });
//# sourceMappingURL=auth-user.decorator.js.map