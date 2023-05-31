-- CreateTable
CREATE TABLE `Usuario` (
    `usuarioId` VARCHAR(191) NOT NULL,
    `rol` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `contrasena` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`usuarioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ruta` (
    `rutaId` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,
    `idUsuario` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`rutaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `historial` (
    `historialId` VARCHAR(191) NOT NULL,
    `rutaHistorial` VARCHAR(191) NOT NULL,
    `idUsuario` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `historial_idUsuario_key`(`idUsuario`),
    PRIMARY KEY (`historialId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ruta` ADD CONSTRAINT `ruta_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`usuarioId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historial` ADD CONSTRAINT `historial_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`usuarioId`) ON DELETE RESTRICT ON UPDATE CASCADE;
