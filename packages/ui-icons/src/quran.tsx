import { faQuran } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Quran icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Quran = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faQuran} {...props} />;
};

export default Quran;
