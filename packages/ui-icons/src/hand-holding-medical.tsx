import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandHoldingMedical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandHoldingMedical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandHoldingMedical} {...props} />;
};

export default HandHoldingMedical;
