CREATE TABLE `PointLog`(
    `id` VARCHAR(255) NOT NULL,
    `user` VARCHAR(255) NOT NULL,
    `createdAt` DATE NOT NULL,
    `updatedAt` DATE NOT NULL,
    `deletedAt` DATE NOT NULL,
    `amount` BIGINT NOT NULL,
    `order` BIGINT NOT NULL,
    `issuedCoupon` BIGINT NOT NULL
);
ALTER TABLE
    `PointLog` ADD PRIMARY KEY(`id`);
CREATE TABLE `Coupon`(
    `id` VARCHAR(255) NOT NULL,
    `createdAt` DATE NOT NULL,
    `updatedAt` DATE NOT NULL,
    `deletedAt` DATE NOT NULL,
    `name` BIGINT NOT NULL,
    `point` BIGINT NOT NULL,
    `art` BIGINT NOT NULL,
    `episode` BIGINT NOT NULL
);
ALTER TABLE
    `Coupon` ADD PRIMARY KEY(`id`);
CREATE TABLE `RefreshToken`(
    `id` VARCHAR(255) NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `expiresAt` DATE NOT NULL,
    `isRevoked` BOOLEAN NOT NULL,
    `user` VARCHAR(255) NOT NULL,
    `createdAt` DATE NOT NULL,
    `updatedAt` DATE NOT NULL,
    `deletedAt` DATE NOT NULL
);
ALTER TABLE
    `RefreshToken` ADD PRIMARY KEY(`id`);
CREATE TABLE `AccessToken`(
    `id` VARCHAR(255) NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `expiresAt` DATE NOT NULL,
    `isRevoked` BOOLEAN NOT NULL,
    `user` VARCHAR(255) NOT NULL,
    `createdAt` VARCHAR(255) NOT NULL,
    `updatedAt` VARCHAR(255) NOT NULL,
    `deletedAt` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `AccessToken` ADD PRIMARY KEY(`id`);
CREATE TABLE `User`(
    `id` VARCHAR(255) NOT NULL,
    `createdAt` DATE NOT NULL,
    `updatedAt` DATE NOT NULL,
    `deletedAt` DATE NOT NULL,
    `displayName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `accessToken` VARCHAR(255) NOT NULL,
    `refreshToken` VARCHAR(255) NOT NULL,
    `accessLogs` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `User` ADD PRIMARY KEY(`id`);
CREATE TABLE `Art`(
    `id` VARCHAR(255) NOT NULL,
    `displayName` VARCHAR(255) NOT NULL,
    `thumbnail` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `author` BIGINT NOT NULL
);
ALTER TABLE
    `Art` ADD PRIMARY KEY(`id`);
CREATE TABLE `episode`(
    `id` VARCHAR(255) NOT NULL,
    `displayName` VARCHAR(255) NOT NULL,
    `thumbnail` VARCHAR(255) NOT NULL,
    `art` BIGINT NOT NULL
);
ALTER TABLE
    `episode` ADD PRIMARY KEY(`id`);
CREATE TABLE `IssuedCoupon`(
    `id` VARCHAR(255) NOT NULL,
    `createdAt` DATE NOT NULL,
    `updatedAt` DATE NOT NULL,
    `deletedAt` DATE NOT NULL,
    `coupon` VARCHAR(255) NOT NULL,
    `user` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `IssuedCoupon` ADD PRIMARY KEY(`id`);
CREATE TABLE `AccessLog`(
    `id` VARCHAR(255) NOT NULL,
    `ip` VARCHAR(255) NOT NULL,
    `user` VARCHAR(255) NOT NULL,
    `createdAt` DATE NOT NULL,
    `updatedAt` DATE NOT NULL,
    `deletedAt` DATE NOT NULL
);
ALTER TABLE
    `AccessLog` ADD PRIMARY KEY(`id`);
CREATE TABLE `tokenBlackList`(
    `id` VARCHAR(255) NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `tokenType` VARCHAR(255) NOT NULL,
    `createdAt` DATE NOT NULL,
    `updatedAt` DATE NOT NULL,
    `deletedAt` DATE NOT NULL
);
ALTER TABLE
    `tokenBlackList` ADD PRIMARY KEY(`id`);
ALTER TABLE
    `IssuedCoupon` ADD CONSTRAINT `issuedcoupon_coupon_foreign` FOREIGN KEY(`coupon`) REFERENCES `Coupon`(`id`);
ALTER TABLE
    `PointLog` ADD CONSTRAINT `pointlog_issuedcoupon_foreign` FOREIGN KEY(`issuedCoupon`) REFERENCES `IssuedCoupon`(`id`);
ALTER TABLE
    `AccessToken` ADD CONSTRAINT `accesstoken_id_foreign` FOREIGN KEY(`id`) REFERENCES `User`(`id`);
ALTER TABLE
    `Coupon` ADD CONSTRAINT `coupon_episode_foreign` FOREIGN KEY(`episode`) REFERENCES `episode`(`id`);
ALTER TABLE
    `AccessLog` ADD CONSTRAINT `accesslog_user_foreign` FOREIGN KEY(`user`) REFERENCES `User`(`id`);
ALTER TABLE
    `Art` ADD CONSTRAINT `art_author_foreign` FOREIGN KEY(`author`) REFERENCES `User`(`id`);
ALTER TABLE
    `IssuedCoupon` ADD CONSTRAINT `issuedcoupon_user_foreign` FOREIGN KEY(`user`) REFERENCES `User`(`id`);
ALTER TABLE
    `Coupon` ADD CONSTRAINT `coupon_art_foreign` FOREIGN KEY(`art`) REFERENCES `Art`(`id`);
ALTER TABLE
    `RefreshToken` ADD CONSTRAINT `refreshtoken_user_foreign` FOREIGN KEY(`user`) REFERENCES `User`(`id`);
ALTER TABLE
    `episode` ADD CONSTRAINT `episode_art_foreign` FOREIGN KEY(`art`) REFERENCES `Art`(`id`);
ALTER TABLE
    `PointLog` ADD CONSTRAINT `pointlog_user_foreign` FOREIGN KEY(`user`) REFERENCES `User`(`id`);