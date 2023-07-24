import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ProjectDiagram icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ProjectDiagram = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faProjectDiagram} {...props} />;
};

export default ProjectDiagram;
