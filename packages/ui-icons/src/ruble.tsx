import { faRuble } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Ruble icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ruble = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRuble} {...props} />;
};

export default Ruble;
