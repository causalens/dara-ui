import { mdiArrowLeftBold } from '@mdi/js';

import { IconProps, StyledMDIcon } from './icon-utils';

/**
 * An ArrowLeftBold icon from Material Design
 *
 * @param {IconProps} props - the component props
 */
const ArrowLeftBold = (props: IconProps): JSX.Element => {
    return <StyledMDIcon path={mdiArrowLeftBold} {...props} />;
};

export default ArrowLeftBold;
