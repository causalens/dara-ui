import * as React from 'react';

import { EditorMode } from '../types';

/**
 * Common graph settings used inside graph sub-components
 */
export interface Settings {
    /** Whether node dragging is enabled */
    allowNodeDrag?: boolean;
    /** Whether to show the details panel when the graph is not editable */
    allowSelectionWhenNotEditable?: boolean;
    /** Flag for disabling edge addition */
    disableEdgeAdd?: boolean;
    /** Flag for disabling latent node addition */
    disableLatentNodeAdd?: boolean;
    /** Flag for disabling node removal */
    disableNodeRemoval?: boolean;
    /** Allow editing */
    editable?: boolean;
    /** Mode the graph viewer should operate in */
    editorMode?: EditorMode;
    /** Whether to show verbose descriptions in the editor frame */
    verboseDescriptions?: boolean;
}

const SettingsContext = React.createContext<Settings | undefined>(undefined);

interface SettingsProviderProps {
    children: React.ReactNode;
    settings: Settings;
}

/**
 * Wrapper around SettingsContext which requires settings to be set
 */
export function SettingsProvider({ children, settings }: SettingsProviderProps): JSX.Element {
    return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
}

/**
 * Helper hook that pulls in Settings from the SettingsContext
 */
export function useSettings(): Settings {
    const settings = React.useContext(SettingsContext);

    if (settings === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }

    return settings;
}
