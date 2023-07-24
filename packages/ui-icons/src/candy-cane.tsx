import { faCandyCane } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CandyCane icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CandyCane = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCandyCane} {...props} />;
};

export default CandyCane;
