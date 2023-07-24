import { faCut } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cut icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cut = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCut} {...props} />;
};

export default Cut;
