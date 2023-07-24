import { faSmoking } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Smoking icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Smoking = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSmoking} {...props} />;
};

export default Smoking;
