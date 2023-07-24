import { faDraftingCompass } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DraftingCompass icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DraftingCompass = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDraftingCompass} {...props} />;
};

export default DraftingCompass;
