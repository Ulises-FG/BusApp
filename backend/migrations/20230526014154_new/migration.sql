-- CreateTable
CREATE TABLE "Usuario" (
    "usuarioId" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("usuarioId")
);

-- CreateTable
CREATE TABLE "ruta" (
    "rutaId" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "idUsuario" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ruta_pkey" PRIMARY KEY ("rutaId")
);

-- CreateTable
CREATE TABLE "historial" (
    "historialId" TEXT NOT NULL,
    "rutaHistorial" TEXT NOT NULL,
    "idUsuario" TEXT NOT NULL,

    CONSTRAINT "historial_pkey" PRIMARY KEY ("historialId")
);

-- CreateIndex
CREATE UNIQUE INDEX "historial_idUsuario_key" ON "historial"("idUsuario");

-- AddForeignKey
ALTER TABLE "ruta" ADD CONSTRAINT "ruta_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("usuarioId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historial" ADD CONSTRAINT "historial_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("usuarioId") ON DELETE RESTRICT ON UPDATE CASCADE;
