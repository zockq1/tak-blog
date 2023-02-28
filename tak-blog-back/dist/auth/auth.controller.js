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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth.service");
const login_credential_dto_1 = require("./dto/login-credential.dto");
const signup_credential_dto_1 = require("./dto/signup-credential.dto");
const get_user_decorator_1 = require("./get-user.decorator");
const only_admin_guard_1 = require("./only-admin.guard");
const user_entity_1 = require("./user.entity");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signup(signupCredentialsDto) {
        return this.authService.signup(signupCredentialsDto);
    }
    login(loginCredentialsDto) {
        return this.authService.login(loginCredentialsDto);
    }
    deleteUser(id) {
        return this.authService.deleteUser(id);
    }
    test(user) {
        console.log("user", user);
    }
};
__decorate([
    (0, common_1.Post)("/signup"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_credential_dto_1.SignupCredentialsDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)("/login"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_credential_dto_1.LoginCredentialsDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt"), only_admin_guard_1.OnlyAdminGuard),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Post)("/test"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt"), only_admin_guard_1.OnlyAdminGuard),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "test", null);
AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map