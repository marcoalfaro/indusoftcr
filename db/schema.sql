CREATE DATABASE indusoftcr;    

CREATE TABLE Empresa
(
    Id serial NOT NULL PRIMARY KEY,
    Name text NOT NULL
);

CREATE TABLE EmpresaConfig
(
    Id int NOT NULL PRIMARY KEY REFERENCES Empresa,
    Cedula text,
	Direccion text NULL,
	Telefono text NULL,
	Fax text NULL,
	Email text NULL,
	Utilidad decimal(10,2) NOT NULL,
	ImpuestoVenta decimal(5,2) NOT NULL,
	Activo bool NOT NULL DEFAULT false,
	PrecioMolde decimal(15,2) NOT NULL DEFAULT 0,
	PrecioTinta decimal(15,2) NOT NULL DEFAULT 0,
	PrecioPositivo decimal(15,2) NOT NULL DEFAULT 0,
	PrecioArte decimal(15,2) NOT NULL DEFAULT 0,
	PrecioSolvente decimal(15,2) NOT NULL DEFAULT 0,
	PrecioCorte decimal(15,2) NOT NULL DEFAULT 0,
	PrecioVelocidad decimal(15,2) NOT NULL DEFAULT 0,
	PrecioHoraImpresion decimal(15,2) NOT NULL DEFAULT 0      
);

CREATE TABLE Cliente
(
	Id serial NOT NULL PRIMARY KEY,
	EmpresaId int NOT NULL REFERENCES Empresa,
    Nombre text NOT NULL,
	Cedula text NULL,
	Telefono text NULL,
	ContactoNombre text NULL,
	ContactoTelefono text NULL,
	ContactoExtension text NULL,
	ContactoCorreo text NULL,	
	Activo bool NOT NULL DEFAULT false
);

CREATE TABLE Linea(
	Id serial NOT NULL PRIMARY KEY,
	EmpresaId int NOT NULL REFERENCES Empresa,
    Nombre text NOT NULL,	
	Activo bool NOT NULL DEFAULT false
);

CREATE TABLE Material(
	Id serial NOT NULL PRIMARY KEY,
    EmpresaId int NOT NULL REFERENCES Empresa,
	Nombre text NOT NULL,
	Altura decimal(10, 2) NULL,
	Base decimal(10, 2) NULL,
	CodigoInventario text NULL,
	CostoInventario decimal(15,2) NULL,
	Activo bool NOT NULL DEFAULT false
);

CREATE TABLE Precio(
	Id serial NOT NULL PRIMARY KEY,
    EmpresaId int NOT NULL REFERENCES Empresa,
	Molde decimal(15,2) NOT NULL,
	Tinta decimal(15,2) NOT NULL,
	Positivo decimal(15,2) NOT NULL,
	Arte decimal(15,2) NOT NULL,
	Solvente decimal(15,2) NOT NULL,
	Corte decimal(15,2) NOT NULL,
	Velocidad decimal(15,2) NOT NULL,
	HoraImpresion decimal(15,2) NOT NULL
);

CREATE TABLE Vendedor(
    Id serial NOT NULL PRIMARY KEY,
    EmpresaId int NOT NULL REFERENCES Empresa,
	Nombre text NOT NULL,
	Email text NULL,
	Telefono text NULL,
	Beeper text NULL,
	Activo bool NOT NULL DEFAULT false
);

CREATE TABLE Usuario(
    Id serial NOT NULL PRIMARY KEY,
    EmpresaId int NOT NULL REFERENCES Empresa,
	Nombre text NOT NULL,
	NombreUsuario text NOT NULL,
	Clave text NOT NULL,
	Cotizar bool NOT NULL,
	Borrar bool NOT NULL,
	Crear bool NOT NULL,
	Activo bool NOT NULL DEFAULT false
);

CREATE TABLE Cotizacion(
    Id serial NOT NULL PRIMARY KEY,
    EmpresaId int NOT NULL REFERENCES Empresa,
	ClienteId int NOT NULL REFERENCES Cliente,
	UsuarioId int NOT NULL REFERENCES Usuario,
	VendedorId int NULL REFERENCES Vendedor,
	MaterialId int NULL REFERENCES Material,
	LineaId int NULL,
	Fecha timestamp NULL,
	PrecioUnitario decimal(15,2) NULL,
	Subtotal decimal(15,2) NULL,
	Porcentaje decimal(15,2) NULL,
	TotalUSD decimal(15,2) NULL,
	TotalCol decimal(15,2) NULL,
	Cantidad int NULL,
	Montaje decimal(10, 2) NULL,
	Base decimal(10, 2) NULL,
	Altura decimal(10, 2) NULL,
	Tintas decimal(10, 2) NULL,
	Cubrimiento decimal(10, 2) NULL,
	Troquel decimal(10, 2) NULL,
	Doblez decimal(10, 2) NULL,
	Cuatricromia decimal(10, 2) NULL,
	Otro decimal(10, 2) NULL,
	Evento bit NULL,
	PorcEvento decimal(10, 2) NULL,
	Aplicada bit NULL,
	FecAplicada timestamp NULL,
	FecRegistro timestamp NULL,
	NumPedido text NULL,
	PrecioMaterial decimal(15,2) NULL,
	PrecioTintas decimal(15,2) NULL,
	PrecioArte decimal(15,2) NULL,
	PrecioImpresion decimal(15,2) NULL,
	PrecioMolde decimal(15,2) NULL,
	PrecioCorte decimal(15,2) NULL,
	PrecioPositivo decimal(15,2) NULL,
	PrecioSolvente decimal(15,2) NULL,
	Rendimiento decimal(10, 2) NULL,
	Laminas decimal(10, 2) NULL,
	Observacion text NULL,
	TipoCambioId int NULL,
	DivLargo decimal(10, 2) NULL,
	DivAncho decimal(10, 2) NULL
);