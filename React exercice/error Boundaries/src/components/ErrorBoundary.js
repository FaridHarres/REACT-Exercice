import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Affiche une UI de repli
        this.setState({ hasError: true });
        // Vous pouvez aussi enregistrer l'erreur au sein d'un service de rapport.
        //logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            // Vous pouvez afficher n'importe quelle UI de repli.
            return (<div className="col bg bg-danger">
                <p style={{color: '#ffffff'}}>OUPS NOUS AVONS UN PETIT PROBLEME</p>
            </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;