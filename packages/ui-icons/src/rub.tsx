import { faRub } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Rub icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Rub = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRub} {...props} />;
};

export default Rub;
