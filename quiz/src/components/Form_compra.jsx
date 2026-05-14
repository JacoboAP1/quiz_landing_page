import { useState } from "react";

// Componente principal del formulario de compra
export default function PurchaseForm() {
const [formData, setFormData] = useState({
nombre: "",
email: "",
telefono: "",
direccion: "",
ciudad: "",
departamento: "",
metodoPago: "transferencia",
notas: "",
});

const [enviado, setEnviado] = useState(false);
const [cargando, setCargando] = useState(false);

// Maneja los cambios en los inputs
const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prev) => ({ ...prev, [name]: value }));
};

// Simula el envío del formulario
const handleSubmit = (e) => {
e.preventDefault();
setCargando(true);
// Simulamos una espera de 1.5s como si fuera una petición real
setTimeout(() => {
    setCargando(false);
    setEnviado(true);
}, 1500);
};

// Si el formulario ya fue enviado, mostramos mensaje de confirmación
if (enviado) {
return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
    <div className="text-center animate-fade-in">
        {/* Ícono de check con animación */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#c9a84c] flex items-center justify-center animate-pulse-slow">
        <svg
            className="w-10 h-10 text-[#c9a84c]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 13l4 4L19 7"
            />
        </svg>
        </div>
        <h2 className="text-3xl font-light text-[#c9a84c] mb-3 tracking-widest uppercase">
        ¡Pedido recibido!
        </h2>
        <p className="text-[#8a8a8a] text-sm tracking-wide mb-8">
        Nos contactaremos contigo en las próximas horas.
        </p>
        <button
        onClick={() => setEnviado(false)}
        className="text-xs tracking-widest uppercase text-[#c9a84c] border border-[#c9a84c]/40 px-8 py-3 hover:bg-[#c9a84c]/10 transition-all duration-300"
        >
        Hacer otro pedido
        </button>
    </div>
    </div>
);
}

return (
<section className="min-h-screen bg-[#0a0a0a] py-20 px-4">
    {/* Fondo con textura sutil */}
    <div className="absolute inset-0 opacity-5 pointer-events-none"
    style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, #c9a84c 0%, transparent 40%)`,
    }}
    />

    <div className="max-w-2xl mx-auto relative">
    {/* Encabezado del formulario */}
    <div className="text-center mb-14">
        {/* Línea decorativa */}
        <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a84c]" />
        <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase">
            Bisutería Artesanal
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9a84c]" />
        </div>
        <h1 className="text-4xl font-light text-white tracking-widest uppercase mb-3">
        Tu Pedido
        </h1>
        <p className="text-[#8a8a8a] text-sm tracking-wide">
        Completa el formulario y nos encargamos del resto
        </p>
    </div>

    {/* Tarjeta del formulario */}
    <div className="border border-[#2a2a2a] bg-[#111111] p-8 md:p-12">
        {/* Detalle decorativo arriba */}
        <div className="w-12 h-px bg-[#c9a84c] mb-10" />

        <form onSubmit={handleSubmit} className="space-y-7">
        {/* Sección: Datos personales */}
        <div>
            <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-5">
            Datos personales
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField
                label="Nombre completo"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
            />
            <InputField
                label="Correo electrónico"
                name="email"
                type="email"
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
            />
            </div>
            <div className="mt-5">
            <InputField
                label="Teléfono / WhatsApp"
                name="telefono"
                type="tel"
                placeholder="+57 300 000 0000"
                value={formData.telefono}
                onChange={handleChange}
                required
            />
            </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-[#1e1e1e]" />

        {/* Sección: Dirección de envío */}
        <div>
            <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-5">
            Dirección de envío
            </p>
            <div className="space-y-5">
            <InputField
                label="Dirección"
                name="direccion"
                type="text"
                placeholder="Calle, número, barrio"
                value={formData.direccion}
                onChange={handleChange}
                required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputField
                label="Ciudad"
                name="ciudad"
                type="text"
                placeholder="Tu ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                required
                />
                <InputField
                label="Departamento"
                name="departamento"
                type="text"
                placeholder="Tu departamento"
                value={formData.departamento}
                onChange={handleChange}
                required
                />
            </div>
            </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-[#1e1e1e]" />

        {/* Sección: Método de pago */}
        <div>
            <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-5">
            Método de pago
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {["transferencia", "nequi", "contraentrega"].map((metodo) => (
                <label
                key={metodo}
                className={`relative flex items-center justify-center py-3 px-4 border cursor-pointer transition-all duration-300 text-sm tracking-wider uppercase
                    ${
                    formData.metodoPago === metodo
                        ? "border-[#c9a84c] text-[#c9a84c] bg-[#c9a84c]/5"
                        : "border-[#2a2a2a] text-[#5a5a5a] hover:border-[#c9a84c]/40 hover:text-[#8a8a8a]"
                    }`}
                >
                <input
                    type="radio"
                    name="metodoPago"
                    value={metodo}
                    checked={formData.metodoPago === metodo}
                    onChange={handleChange}
                    className="sr-only"
                />
                {/* Ícono de check cuando está seleccionado */}
                {formData.metodoPago === metodo && (
                    <span className="absolute top-1.5 right-1.5 w-3 h-3 bg-[#c9a84c] rounded-full" />
                )}
                {metodo}
                </label>
            ))}
            </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-[#1e1e1e]" />

        {/* Campo de notas */}
        <div>
            <label className="block text-[#5a5a5a] text-xs tracking-wider uppercase mb-2">
            Notas adicionales{" "}
            <span className="text-[#3a3a3a] normal-case">(opcional)</span>
            </label>
            <textarea
            name="notas"
            value={formData.notas}
            onChange={handleChange}
            placeholder="Piezas que deseas, tallas, personalizaciones..."
            rows={3}
            className="w-full bg-transparent border border-[#2a2a2a] text-[#cccccc] text-sm px-4 py-3 placeholder-[#3a3a3a] focus:outline-none focus:border-[#c9a84c]/50 transition-colors duration-300 resize-none"
            />
        </div>

        {/* Botón de envío */}
        <div className="pt-2">
            <button
            type="submit"
            disabled={cargando}
            className="w-full py-4 border border-[#c9a84c] text-[#c9a84c] text-sm tracking-[0.3em] uppercase
                hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-500
                disabled:opacity-50 disabled:cursor-not-allowed
                relative overflow-hidden group"
            >
            {/* Efecto de fondo al hover */}
            <span className="relative z-10">
                {cargando ? "Enviando..." : "Confirmar pedido"}
            </span>
            {/* Indicador de carga */}
            {cargando && (
                <span className="absolute right-6 top-1/2 -translate-y-1/2">
                <svg
                    className="animate-spin w-4 h-4 text-[#c9a84c]"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    />
                    <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                </svg>
                </span>
            )}
            </button>
        </div>
        </form>
    </div>

    {/* Nota de seguridad */}
    <p className="text-center text-[#3a3a3a] text-xs tracking-wide mt-6">
        🔒 Tu información está segura con nosotros
    </p>
    </div>
</section>
);
}

// Componente reutilizable para cada input del formulario
function InputField({ label, name, type, placeholder, value, onChange, required }) {
return (
<div className="group">
    <label className="block text-[#5a5a5a] text-xs tracking-wider uppercase mb-2 group-focus-within:text-[#c9a84c] transition-colors duration-300">
    {label}
    {required && <span className="text-[#c9a84c] ml-1">*</span>}
    </label>
    <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className="w-full bg-transparent border-b border-[#2a2a2a] text-[#cccccc] text-sm px-0 py-2.5 placeholder-[#3a3a3a]
        focus:outline-none focus:border-[#c9a84c] transition-colors duration-300"
    />
</div>
);
}