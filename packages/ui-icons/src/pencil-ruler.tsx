import { mdiPencilRuler } from '@mdi/js';

import { IconProps, StyledMDIcon } from './icon-utils';

/**
 * PencilRuler icon from Material Design
 *
 * @param {IconProps} props - the component props
 */
const PencilRuler = (props: IconProps): JSX.Element => {
    return <StyledMDIcon path={mdiPencilRuler} {...props} />;
};

export default PencilRuler;
