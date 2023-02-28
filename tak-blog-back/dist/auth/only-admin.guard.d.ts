import { ExecutionContext } from "@nestjs/common";
declare const OnlyAdminGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class OnlyAdminGuard extends OnlyAdminGuard_base {
    canActivate(context: ExecutionContext): boolean;
}
export {};
