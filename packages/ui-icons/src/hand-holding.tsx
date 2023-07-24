import { faHandHolding } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandHolding icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandHolding = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandHolding} {...props} />;
};

export default HandHolding;
