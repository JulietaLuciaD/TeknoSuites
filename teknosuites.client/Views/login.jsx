import { useState } from "react";
import "./login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://localhost:5001/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (!response.ok) throw new Error("Error en login");

            const data = await response.json();
            console.log("Login OK", data);

            // Guardar token si usás JWT
            localStorage.setItem("token", data.token);

        } catch (error) {
            console.error(error);
            alert("Credenciales incorrectas");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>LOGIN</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Ingrese su email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Contrase&ntilde;a</label>
                        <input
                            type="password"
                            placeholder="Ingrese su contrase&ntilde;a"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">Iniciar Sesi&oacute;n</button>
                </form>
            </div>
        </div>
    );
}
