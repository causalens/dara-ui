import { faDiagramNext } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DiagramNext icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DiagramNext = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDiagramNext} {...props} />;
};

export default DiagramNext;
