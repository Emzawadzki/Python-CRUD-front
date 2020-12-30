import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const Layout: React.FC = ({ children }) => (
    <><header>Header</header>
        <Container maxWidth="lg">
            {children}
        </Container>
    </>
)

export default Layout