import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DiagramProject icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DiagramProject = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDiagramProject} {...props} />;
};

export default DiagramProject;
