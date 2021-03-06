import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { PageHeader, Brand, Nav, NavItem, NavList, NavVariants, Stack, StackItem } from "@patternfly/react-core";
import { ApplicationsIcon, TopologyIcon, ServerIcon, KeyIcon } from "@patternfly/react-icons";
import UserStatus from "./UserStatus";
import Logo from "../static/img/logo.svg";

export default () => {
  return (
    <Stack height="100%">
      <StackItem>
        <PageHeader logo={<Brand src={Logo} alt="SPAship Logo" />} />
      </StackItem>
      <StackItem isFilled>
        <Nav aria-label="Nav" theme="light">
          <NavList variant={NavVariants.simple}>
            <NavItem itemId={0} isActive={!!useRouteMatch("/dashboard")} disabled={true}>
              <Link to={`/dashboard`}>
                <TopologyIcon />
                Dashboard
              </Link>
            </NavItem>
            <NavItem itemId={1} isActive={!!useRouteMatch("/applications")}>
              <Link to={`/applications`}>
                <ApplicationsIcon />
                Applications
              </Link>
            </NavItem>
            <NavItem itemId={2} isActive={!!useRouteMatch("/authentication")}>
              <Link to={`/authentication`}>
                <KeyIcon />
                Authentication
              </Link>
            </NavItem>
            <NavItem itemId={3} isActive={!!useRouteMatch("/environments")}>
              <Link to={`/environments`}>
                <ServerIcon />
                Environments
              </Link>
            </NavItem>
          </NavList>
        </Nav>
      </StackItem>
      <StackItem>
        <UserStatus />
      </StackItem>
    </Stack>
  );
};
