import { faDharmachakra } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Dharmachakra icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Dharmachakra = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDharmachakra} {...props} />;
};

export default Dharmachakra;
