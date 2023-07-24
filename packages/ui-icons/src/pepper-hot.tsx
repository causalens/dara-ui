import { faPepperHot } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PepperHot icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PepperHot = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPepperHot} {...props} />;
};

export default PepperHot;
