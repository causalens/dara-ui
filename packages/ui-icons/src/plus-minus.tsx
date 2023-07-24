import { faPlusMinus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlusMinus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlusMinus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlusMinus} {...props} />;
};

export default PlusMinus;
